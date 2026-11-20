const PROJECT_ID = 'owgyca0p'; // 👈 حط الـ projectId بتاعك هنا
const DATASET = 'production';
const API_VERSION = '2026-11-20';

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req, res) {
  const courseId = req.query.id;

  if (!courseId) {
    return res.redirect(302, '/courses');
  }

  const targetUrl = `/courses?course=${encodeURIComponent(courseId)}`;

  // قيم افتراضية لو حصل أي خطأ في الجلب
  let title = 'أكاديمية وادي الريان للتدريب والاستشارات المساحية';
  let description = 'تدريب عملي وميداني على أجهزة المساحة وبرامج المكتب الفني والـ GIS';
  let imageUrl = `https://${req.headers.host}/wadi-elrayyan-academy.jpg`;

  try {
    const query = `*[_type == "course" && slug.current == $id][0]{
      title,
      fullDescription,
      "imageUrl": image.asset->url
    }`;

    const sanityUrl = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}&%24id=${encodeURIComponent(JSON.stringify(courseId))}`;
    const response = await fetch(sanityUrl);
    const { result } = await response.json();

    if (result) {
      title = `${result.title} | أكاديمية وادي الريان`;
      description = result.fullDescription?.slice(0, 160) || description;
      if (result.imageUrl) {
        // مقاس مثالي وخفيف لمعاينة واتساب وفيسبوك
        imageUrl = `${result.imageUrl}?w=1200&h=630&fit=crop&q=80&fm=jpg`;
      }
    }
  } catch (err) {
    console.error('OG Fetch Error:', err);
  }

  const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(title)}</title>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${escapeHtml(imageUrl)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta http-equiv="refresh" content="0;url=${targetUrl}" />
</head>
<body>
  <script>window.location.replace(${JSON.stringify(targetUrl)});</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  return res.status(200).send(html);
}
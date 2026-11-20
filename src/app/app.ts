import { Component} from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';
import { CourseModal } from '../components/course-modal/course-modal';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, CourseModal, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

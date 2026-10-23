import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { CourseDetailPage } from './pages/CourseDetailPage'
import { CoursesPage } from './pages/CoursesPage'
import { HomePage } from './pages/HomePage'
import { LessonPlaygroundPage } from './pages/LessonPlaygroundPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlaygroundPage } from './pages/PlaygroundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:courseId" element={<CourseDetailPage />} />
          <Route path="courses/:courseId/playground" element={<LessonPlaygroundPage />} />
          <Route path="courses/:courseId/lessons/:lessonIndex" element={<LessonPlaygroundPage />} />
          <Route path="playground" element={<PlaygroundPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

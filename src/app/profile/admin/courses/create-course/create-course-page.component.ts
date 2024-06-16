import {Component, OnInit} from "@angular/core";
import {validateInputData} from '../validator';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-course-page-component',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.scss', './create-course-page-adaptive.component.scss']
})
export class CreateCoursePageComponent implements OnInit {

  course = {
    img: {
      name: '',
      size: 0
    },
    title: '',
    lessonsCount: 0,
    hoursCount: 0,
    lessonsAvailable: 0,
    lessons: []
  };
  secondsOnPage = 0

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
  }

  saveCourse() {
    const courseNameElement = document.getElementById("course_name") as HTMLInputElement;
    const hoursCountElement = document.getElementById("course_hours_count") as HTMLInputElement;
    const lessonsAvailableElement = document.getElementById("course_lessons_available_count") as HTMLInputElement;

    this.course.title = courseNameElement.value;
    this.course.hoursCount = parseInt(hoursCountElement.value);
    this.course.lessonsAvailable = parseInt(lessonsAvailableElement.value);

    validateInputData(this.course.title, this.course.hoursCount, this.course.lessonsAvailable, this.course.lessonsCount);

    this.attachLessonsInfo();

    this.http.post("/api/courses/courses/",
      {
        "title": this.course.title,
        "description": this.course.lessonsCount + " уроков " + this.course.hoursCount + " часов " + this.course.lessonsAvailable + " доступно уроков "
      })

    console.log(this.course)
  }

  attachLessonsInfo() {
    const lessonsElements = Array.from(document.getElementsByClassName("create_course__content__lessons__lesson"));

    // @ts-ignore
    lessonsElements.forEach((lEl: HTMLElement) => {
      const lessonId = lEl.id;
      const lNameElem = lEl.querySelector('input[name="lesson_name"]') as HTMLInputElement;
      const lLinkElem = lEl.querySelector('.create_course__content__lessons__lesson__info__lesson_link input[type="text"]') as HTMLInputElement;
      const lSummaryLinkElem = lEl.querySelector('.create_course__content__lessons__lesson__info__summary_link input[type="text"]') as HTMLInputElement;
      const lHWLinkElem = lEl.querySelector('.create_course__content__lessons__lesson__info__hw input[type="text"]') as HTMLInputElement;

      if (lessonId) {
        const lessonIndex = parseInt(lessonId);
        if (!isNaN(lessonIndex)) {
          const lesson = {
            id: lessonIndex,
            name: lNameElem ? lNameElem.value : '',
            link: lLinkElem ? lLinkElem.value : '',
            summaryLink: lSummaryLinkElem ? lSummaryLinkElem.value : '',
            hwLink: lHWLinkElem ? lHWLinkElem.value : '',
          };

          // Update the lesson in the course lessons array
          const existingLesson = this.course.lessons.find((lesson: any) => lesson.id - 1 === lessonIndex);
          if (existingLesson) {
            Object.assign(existingLesson, lesson);
          }
        }
      }
    });
  }

  showLessonInfo(e: any) {
    // Check if the target element is not an input
    if (e.target.tagName.toLowerCase() !== 'input') {
      // Toggle the hidden class for lesson info and play button
      const lessonElement = e.currentTarget;

      const lessonInfo = lessonElement.querySelector('.create_course__content__lessons__lesson__info');
      if (lessonInfo) {
        lessonInfo.classList.toggle('hidden');
      }

      const playButton = lessonElement.querySelector('.show_btn');
      if (playButton) {
        playButton.classList.toggle('hidden');
      }

      // Toggle the hidden class for the arrow icon
      const arrowDown = lessonElement.querySelector('.arrow_down');
      if (arrowDown) {
        arrowDown.classList.toggle('hidden');
      }
    }
  }

  addLesson() {
    // Create a new lesson object or fetch it from somewhere
    const newLesson = {
      id: this.course.lessons.length + 1, // Assign a unique ID
    };

    // Push the new lesson object into the lessons array of the course
    // @ts-ignore
    this.course.lessons.push(newLesson);
    this.course.lessonsCount = this.course.lessons.length;
  }

  async handleFileInput(event: any) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Perform actions with the file, such as getting its path
      const imagePath = URL.createObjectURL(file);
      const imgElement = document.getElementById("course_icon_img") as HTMLImageElement;
      imgElement.src = imagePath;

      this.course.img.name = file.name;
      this.course.img.size = file.size;
    }
  }
}

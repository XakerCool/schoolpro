import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {validateInputData} from "../validator";

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.scss']
})
export class EditCoursePageComponent implements OnInit{
  courses = [
    {
      id: 1,
      courseName: "История РК",
      coursePrice: 12990,
      lessonsCount: 40,
      hours: 60,
      iconPath: "./assets/KZ.png",
      backgroundColor: "rgba(8, 106, 254, 1)",
      rating: 5.0,
      lessons: [
        {
          id: 1,
          name: "бла бла бла",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok",
          summaryLink: "asd"
        },
        {
          id: 2,
          name: "здесь что-то умное",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok",
          summaryLink: "asd"
        },
        {
          id: 3,
          name: "хз",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok",
          summaryLink: "asd"
        },
        {
          id: 4,
          name: "Отрицание",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok",
          summaryLink: "asd"
        },
        {
          id: 5,
          name: "ахаххаыхахзхаыф",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok",
          summaryLink: "asd"
        },
      ]
    },
    {
      id: 2,
      courseName: "Математика",
      coursePrice: 12990,
      lessonsCount: 42,
      hours: 65,
      iconPath: "./assets/books.png",
      backgroundColor: "rgba(254, 8, 45, 1)",
      rating: 5.0,
      lessons: [
        {
          name: "бла бла бла",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "здесь что-то умное",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "хз",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "Отрицание",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "ахаххаыхахзхаыф",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
      ]
    },
    {
      id: 3,
      courseName: "Физика",
      coursePrice: 12990,
      lessonsCount: 52,
      hours: 78,
      iconPath: "./assets/telescope.png",
      backgroundColor: "rgba(87, 254, 8, 1)",
      rating: 5.0,
      lessons: [
        {
          name: "бла бла бла",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "здесь что-то умное",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "хз",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "Отрицание",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "ахаххаыхахзхаыф",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
      ]
    },
  ]

  course = {
    id: 0,
    img: {
      name: '',
      size: 0
    },
    name: '',
    lessonsCount: 0,
    hoursCount: 0,
    lessonsAvailable: 0,
    lessons: []
  }

  courseId: any
  selectedCourse: any
  secondsOnPage = 0

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.selectedCourse = this.courses.find(course => course.id == this.courseId)
      this.course.id = this.selectedCourse.id;
      this.course.name = this.selectedCourse.courseName;
      this.course.lessonsCount = this.selectedCourse.lessonsCount;
      this.course.hoursCount = this.selectedCourse.hours;
      this.course.lessonsAvailable = 0;
      this.course.lessons = this.selectedCourse.lessons;
      this.course.img.name = this.selectedCourse.iconPath.substring("./assets/".length);
      setTimeout(() => {
        this.attachLessonsInfo();
      }, 10)
    });
  }

  showLessonInfo(e: any) {
    // Check if the target element is not an input
    if (e.target.tagName.toLowerCase() !== 'input') {
      // Toggle the hidden class for lesson info and play button
      const lessonElement = e.currentTarget;

      const lessonInfo = lessonElement.querySelector('.edit_course__content__lessons__lesson__info');
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

  attachLessonsInfo() {
    const lessonsElements = Array.from(document.getElementsByClassName("edit_course__content__lessons__lesson"));
    // @ts-ignore
    lessonsElements.forEach((lEl: HTMLElement) => {
      const lessonId = lEl.id;
      const lNameElem = lEl.querySelector('input[name="lesson_name"]') as HTMLInputElement;
      const lLinkElem = lEl.querySelector('.edit_course__content__lessons__lesson__info__lesson_link input[type="text"]') as HTMLInputElement;
      const lSummaryLinkElem = lEl.querySelector('.edit_course__content__lessons__lesson__info__summary_link input[type="text"]') as HTMLInputElement;
      const lHWLinkElem = lEl.querySelector('.edit_course__content__lessons__lesson__info__hw input[type="text"]') as HTMLInputElement;

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
          const existingLesson = this.course.lessons.find((lesson: any) => lesson.id === lessonIndex);
          // @ts-ignore
          if (existingLesson) {
            Object.assign(existingLesson, lesson);
          }
        }
      }
    });
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

  saveChanges() {
    const courseNameElement = document.getElementById("course_name") as HTMLInputElement;
    const hoursCountElement = document.getElementById("course_hours_count") as HTMLInputElement;
    const lessonsCountElement = document.getElementById("course_lessons_count") as HTMLInputElement;
    const lessonsAvailableElement = document.getElementById("course_lessons_available_count") as HTMLInputElement;
    const courseImgElement = document.getElementById("picked_image") as HTMLInputElement;

    this.course.name = courseNameElement.value;
    this.course.hoursCount = parseInt(hoursCountElement.value);
    this.course.lessonsCount = parseInt(lessonsCountElement.value);
    this.course.lessonsAvailable = parseInt(lessonsAvailableElement.value);

    // @ts-ignore
    if (courseImgElement.files.length > 0) {
      // @ts-ignore
      const file = courseImgElement.files[0];
      this.course.img.size = file.size;
    } else {
      const imgElem = document.getElementById("course_icon_img") as HTMLImageElement;
      this.getImageFileInfo(imgElem)
        .then(file => {
          this.course.img.name = file.name;
          this.course.img.size = file.size;
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }


    validateInputData(this.course.name, this.course.hoursCount, this.course.lessonsAvailable, this.course.lessonsCount);

    const lessonsListElement = Array.from(document.getElementsByClassName("edit_course__content__lessons__lesson"));
    lessonsListElement.forEach(lEl => {
      const lNameElem = lEl.querySelector("input[name='lesson_name']") as HTMLInputElement;
      const lLessonLinkElem = lEl.querySelector("input[name='lesson_link']") as HTMLInputElement;
      const lSummaryLinkElem = lEl.querySelector("input[name='lesson_summary']") as HTMLInputElement;
      const lHWLinkElem = lEl.querySelector("input[name='hw']") as HTMLInputElement;

      const lesson = {
        id: parseInt(lEl.id),
        name: "",
        lessonLink: "",
        summaryLink: "",
        hw: ""
      }

      lesson.name = lNameElem.value
      lesson.lessonLink = lLessonLinkElem.value;
      lesson.summaryLink = lSummaryLinkElem.value;
      lesson.hw = lHWLinkElem.value;

      // @ts-ignore
      this.course.lessons[lEl.id-1] = lesson;
    })

    console.log(this.course)
  }

  getImageFileInfo(imgElement: any): Promise<File> {
    const imageUrl = imgElement.src;

    // Make an HTTP request to fetch the image data
    return fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a file object from the blob
        const file = new File([blob], imageUrl.substring(imageUrl.lastIndexOf("/")+1, imageUrl.length));

        // Return the file object
        return file;
      })
      .catch(error => {
        console.error("Error fetching image data:", error);
        throw error;
      });
  }
}

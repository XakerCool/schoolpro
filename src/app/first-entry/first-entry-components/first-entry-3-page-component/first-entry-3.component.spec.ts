import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { FirstEntry3Component } from "./first-entry-3.component";

describe('FirstEntry3Component', () => {
  let component: FirstEntry3Component;
  let fixture: ComponentFixture<FirstEntry3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstEntry3Component],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(FirstEntry3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})

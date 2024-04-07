import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { FirstEntry1Component } from "./first-entry-1.component";

describe('FirstEntry1Component', () => {
  let component: FirstEntry1Component;
  let fixture: ComponentFixture<FirstEntry1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstEntry1Component],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(FirstEntry1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})

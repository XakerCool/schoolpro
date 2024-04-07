import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { FirstEntry2Component } from "./first-entry-2.component";

describe('FirstEntry2Component', () => {
  let component: FirstEntry2Component;
  let fixture: ComponentFixture<FirstEntry2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstEntry2Component],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(FirstEntry2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})

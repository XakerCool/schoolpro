import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { FirstEntryHeaderComponent } from "./first-entry-header.component";

describe('FirstEntryHeaderComponent', () => {
  let component: FirstEntryHeaderComponent;
  let fixture: ComponentFixture<FirstEntryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstEntryHeaderComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(FirstEntryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})

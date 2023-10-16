import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-events',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './search-events.component.html',
})
export class SearchEventsComponent implements OnInit, OnDestroy {
  filterForm!: FormGroup;
  destroy$ = new Subject<void>();
  @Output() onSearch = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      name: [''],
      venue: [''],
      location: [''],
    });
  }
  ngOnInit(): void {
    this.filterForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
        this.onSearch.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

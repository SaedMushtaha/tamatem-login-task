import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  logoUrl: string;
  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private imageService: ImageService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadLogo();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Method to load the logo image asynchronously
  loadLogo(): void {
    this.imageService.getLogo().subscribe(
      (avatar: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.logoUrl = reader.result as string;
          this.loading = false; // loading to false once the image is loaded
        };
        reader.readAsDataURL(avatar);
      },
      (error) => {
        console.error('Failed to load Logo', error);
        this.loading = false; // loading to false in case of an error
      },
    );
  }

  // Method triggered on form submission
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form is valid. Submitting...');
    } else {
      console.log('Form is invalid. Please check the fields.');
      this.loginForm.markAllAsTouched(); // Mark all fields as touched to trigger error messages
    }
  }
}

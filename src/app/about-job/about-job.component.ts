import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobType } from 'types/job';
import { JobService } from '../services/job-service/job.service';

@Component({
  selector: 'app-about-job',
  templateUrl: './about-job.component.html',
  styleUrls: ['./about-job.component.scss'],
})
export class AboutJobComponent implements OnInit {
  isLoading = true;
  job!: JobType;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location
  ) {
    this.job = history.state?.job;
  }

  ngOnInit(): void {
    if (this.job) {
      this.isLoading = false;
      return;
    }
    this.isLoading = true;
    const jobId = this.route.snapshot.paramMap.get('id') || '0';
    this.jobService.getJobById(parseInt(jobId)).subscribe((data) => {
      this.job = data;
      this.isLoading = false;
    });
  }

  onBackClick() {
    this.location.back();
  }
}

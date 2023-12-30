// src/app/central.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CentralService {
    private projectUrl: string = '';

    setProjectClicked(url: string): void {
        this.projectUrl = url;
    }

    getProjectUrl(): string {
        return this.projectUrl;
    }
}

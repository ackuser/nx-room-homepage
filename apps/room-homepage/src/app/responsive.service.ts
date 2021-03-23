import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResponsiveService {

    private readonly isMobile = new BehaviorSubject(false);
    
    public screenWidth: string;

    /**
     * Creates an instance of responsive service.
     */
    constructor() {
        this.checkWidth();
    }

    /**
     * Determines whether mobile change on
     * @param status 
     */
    onMobileChange(status: boolean) {
        this.isMobile.next(status);
    }

    /**
     * Gets mobile status
     * @returns mobile status 
     */
    getMobileStatus() {
        return this.isMobile.asObservable();
    }

    /**
     * Checks width
     */
    public checkWidth() {
        const width = window.innerWidth;
        if (width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        } else if (width > 768 && width <= 1280) {
            this.screenWidth = 'md';
            this.onMobileChange(false);
        } else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
        return this.screenWidth;
    }
}

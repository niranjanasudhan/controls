import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  player: any; // Use 'any' or omit type for simplicity

  ngOnInit() {}

  ngAfterViewInit() {
   
    this.player = videojs('my-video', {
      controls: true,
      autoplay: false,
      preload: 'auto',
      responsive: true,
      fluid: true,
      width: 640,
      height: 264,
      controlBar: {
        fullscreenToggle: true, // Enable fullscreen option
      }
    });

    // Add custom theater mode functionality
    this.player.ready(() => {
      let imagePath='assets/Icons/theater-icon.png';
      const theaterButton = document.createElement('button');
      theaterButton.innerHTML = `<img src="${imagePath}" alt="Theater Button" style="width: 50%; height: auto;margin-top:-2px"/>`;
      theaterButton.className = 'vjs-control vjs-button';
      theaterButton.onclick = () => this.toggleTheaterMode();
      this.player.controlBar.el().appendChild(theaterButton);
    });
  }
  // ngAfterViewInit() {
    
  // }
  // toggleTheaterMode() {
  //   const playerEl = this.player.el();
  //   playerEl.classList.toggle('theater-mode');
  // }
  toggleTheaterMode() {
    const playerEl = this.player.el();
    const isTheaterMode = playerEl.classList.toggle('theater-mode');
  
    if (isTheaterMode) {
      // Set full width and fixed height for theater mode
      playerEl.style.width = '100vw';  // Full width in theater mode
      playerEl.style.height = '400px';  // Fixed height in theater mode
    } else {
      // Reset to initial dimensions
      playerEl.style.width = '200px'; // Reset to initial width
      playerEl.style.height = '200px'; // Reset to initial height
    }
  }
  

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}

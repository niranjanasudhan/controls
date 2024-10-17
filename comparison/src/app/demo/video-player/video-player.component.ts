import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  player: any; // Use 'any' or omit type for simplicity
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  ngOnInit() {}
  status=false;
  ngAfterViewInit() {
    // this.player = videojs(this.videoPlayer.nativeElement, {
    //   controls: true,
    //   autoplay: false,
    //   preload: 'auto'
    // });
    this.player = videojs(this.videoPlayer.nativeElement, {
      controls: true,
      autoplay: true,
      preload: 'auto',
      // controls: true,
      // autoplay: false,
      // preload: 'auto',
      // responsive: true,
      // fluid: true,
      // width: 640,
      // height: 264,
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
  // toggleTheaterMode() {
  //   const playerEl = this.player.el();
  //   const isTheaterMode = playerEl.classList.toggle('theater-mode');
  
  //   if (isTheaterMode) {
  //     // Set full width and fixed height for theater mode
  //     playerEl.style.width = '100vw';  // Full width in theater mode
  //     playerEl.style.height = '400px';  // Fixed height in theater mode
  //   } else {
  //     // Reset to initial dimensions
  //     playerEl.style.width = '200px'; // Reset to initial width
  //     playerEl.style.height = '200px'; // Reset to initial height
  //   }
  // }
  
  toggleTheaterMode() {
    if(this.status==true){
      this.status=false;
    }
    else
    {
      this.status=true;
    }
    if(this.status==true)
    {
      console.log("this is theoter mode")
      const customWidth = 1500;  // Set your desired width
      const customHeight = 400; // Set your desired height
  
      this.player.width(customWidth);
      this.player.height(customHeight);
  
      // Optionally, update CSS for better responsiveness
      const playerElement = this.videoPlayer.nativeElement.parentNode;
      playerElement.style.width = `${customWidth}px `;
      playerElement.style.height = `${customHeight}px`;
  
  
      
      this.player.width(customWidth);
      this.setCoverStyle(customWidth,customHeight);
    }
    else
    {
      console.log("this is theoter mode")
      const customWidth = 600;  // Set your desired width
      const customHeight = 400; // Set your desired height
  
      this.player.width(customWidth);
      this.player.height(customHeight);
  
      // Optionally, update CSS for better responsiveness
      const playerElement = this.videoPlayer.nativeElement.parentNode;
      playerElement.style.width = `${customWidth}px `;
      playerElement.style.height = `${customHeight}px`;
  
  
      
      this.player.width(customWidth);
      this.setCoverStyle(customWidth,customHeight);
    }
   
  }
  private setCoverStyle(width:number, height:number) {
    console.log("setCoverStyle");
    const videoElement = this.videoPlayer.nativeElement.querySelector('.video-js');

    if (videoElement) {
     
      videoElement.style.position = 'absolute';
      videoElement.style.top = '50%';
      videoElement.style.left = '50%';
      videoElement.style.width = `${width}px `; // Allow width to scale
      videoElement.style.height = `${height}px`; // Fill height
      videoElement.style.minWidth = '100%'; // Cover the player
      videoElement.style.minHeight = '100%'; // Cover the player
      videoElement.style.transform = 'translate(-50%, -50%)'; // Center the video
      videoElement.style.objectFit='contain';
    }
  }
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}

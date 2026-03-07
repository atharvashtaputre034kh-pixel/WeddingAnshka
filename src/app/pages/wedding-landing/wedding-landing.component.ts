import {
Component,
AfterViewInit,
ViewChild,
ElementRef,
HostListener,
OnInit
} from '@angular/core';

@Component({
selector:'app-wedding-landing',
templateUrl:'./wedding-landing.component.html',
styleUrls:['./wedding-landing.component.scss']
})
export class WeddingLandingComponent implements AfterViewInit,OnInit{

@ViewChild('bgMusic') music!:ElementRef<HTMLAudioElement>;
@ViewChild('mobileVideo') mobileVideo!:ElementRef<HTMLVideoElement>;
@ViewChild('desktopVideo') desktopVideo!:ElementRef<HTMLVideoElement>;

videoStarted=false;
petals=Array(20);

targetDate=new Date('2026-05-08T11:15:00');

days=0;
hours=0;
minutes=0;
seconds=0;

ngAfterViewInit(){

setTimeout(()=>{
this.startVideo();
},2000);

this.initSectionReveal();
}

ngOnInit(){

setInterval(()=>{

const now=new Date().getTime();
const distance=this.targetDate.getTime()-now;

this.days=Math.floor(distance/(1000*60*60*24));
this.hours=Math.floor((distance/(1000*60*60))%24);
this.minutes=Math.floor((distance/(1000*60))%60);
this.seconds=Math.floor((distance/1000)%60);

},1000);

}

/* VIDEO */

private startVideo(){

const isDesktop=window.innerWidth>=1024;

const vid=isDesktop
?this.desktopVideo.nativeElement
:this.mobileVideo.nativeElement;

vid.muted=true;

vid.play().then(()=>{
this.videoStarted=true;
this.startMusic();
}).catch(()=>{});

}

/* MUSIC */

private startMusic(){

if(!this.music)return;

const audio=this.music.nativeElement;
audio.volume=0.2;

audio.play().catch(()=>{
console.log("Autoplay blocked");
});

}

/* SCROLL BAR */

@HostListener('window:scroll',[])
updateScrollProgress(){

const scrollTop=window.scrollY;
const docHeight=document.documentElement.scrollHeight-window.innerHeight;

const progress=(scrollTop/docHeight)*100;

const bar=document.querySelector('.scroll-progress') as HTMLElement;

if(bar){
bar.style.width=progress+'%';
}

}

/* SECTION ANIMATION */

private initSectionReveal(){

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add('section-visible');
}

});

},

{threshold:0.3}

);

document.querySelectorAll('.reveal-section')
.forEach(el=>observer.observe(el));

}

}
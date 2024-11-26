export interface Slide {
  image: string;
  imageTitle: string;
  imageDescription: string;
  currentSlide?: number;
  onPrev?: () => void;
  onNext?: () => void;
  onSelect?: (index: number) => void;
}

export interface SlideProps {
  slide: Slide;
  isActive: boolean;
}
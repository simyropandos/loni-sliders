export interface SliderPageInfo {
    href: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  }
  
export interface VolumeSliderProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

  
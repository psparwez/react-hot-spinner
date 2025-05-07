export interface SpinnerProps {
  /**
   * The size of the spinner in pixels or any valid CSS size value
   * @default '50px'
   */
  size?: string | number;

  /**
   * The color of the spinner blades
   * @default '#f0f0f0'
   */
  color?: "white" | "black" | string;

  /**
   * Additional CSS class name(s) to apply to the spinner container
   */
  className?: string;

  /**
   * Center the spinner in its parent container
   * @default false
   */
  center?: boolean;
}

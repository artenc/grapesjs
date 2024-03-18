export interface UndoManagerConfig {
  /**
   * Maximum number of undo items.
   * @default 500
   */
  maximumStackLength?: number;
  /**
   * Track component selection.
   * @default true
   */
  trackSelection?: boolean;

  /**
   * Use the property to use own instance of undo manager
   */
  undoManagerInstance?: Object | Function;
}

const config: UndoManagerConfig = {
  maximumStackLength: 500,
  trackSelection: true,
  undoManagerInstance: undefined,
};

export default config;

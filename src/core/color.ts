import Rgb from "./interfaces/rgb"

export default class Color {
  public constructor(public readonly hex: string) {}

  /**
   * https://stackoverflow.com/a/5624139/10644595
   */
  public getRGB(): Rgb {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex)
    const base16 = 16
    return result
      ? {
          r: parseInt(result[1], base16),
          g: parseInt(result[2], base16),
          b: parseInt(result[3], base16),
        }
      : null
  }
}

interface Font {
    fontSize: number
    lineHeight: number
}

export const fonts: Record<string, Font> = {
    header1: {
        fontSize: 32,
        lineHeight: 50
    },
    textXL: {
        fontSize: 16,
        lineHeight: 22
    },
    textL: {
        fontSize: 14,
        lineHeight: 21
    }
}
export type TVideoPlayer = {
	videoSource: string
	slug: string
}

export type TVideoElement = {
	msRequestFullscreen?: () => void
	mozRequestFullscreen?: () => void
	webkitRequestFullscreen?: () => void
} & HTMLVideoElement

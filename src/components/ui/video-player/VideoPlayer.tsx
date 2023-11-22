import cn from 'classnames'
import { FC } from 'react'

import Icon from '@/components/ui/icon/Icon'
import AuthPlaceholder from '@/components/ui/video-player/auth-placeholder/AuthPlaceholder'
import { TVideoPlayer } from '@/components/ui/video-player/video.types'

import { useAuth } from '@/hooks/auth/useAuth'
import { useVideo } from '@/hooks/video/useVideo'

import styles from './VideoPlayer.module.scss'

const VideoPlayer: FC<TVideoPlayer> = ({ slug, videoSource }) => {
	const { actions, video, videoRef } = useVideo()
	const { user } = useAuth()
	return (
		<div className={cn(styles.wrap)}>
			{!user ? (
				<AuthPlaceholder slug={slug} />
			) : (
				<>
					<video
						ref={videoRef}
						className={styles.video}
						src={`${videoSource}#t=8`}
						preload="metadata`"
					></video>
					<div className={styles.manipulate}>
						<div className={styles.progress}>
							<span
								style={{ width: `${video.progress}%` }}
								className={styles.progressBar}
							></span>
						</div>
						<div className={styles.control}>
							<div className={styles.left}>
								<button onClick={actions.revert} className={styles.btn}>
									<Icon name="MdHistory" />
								</button>
								<button onClick={actions.toggleVideo} className={styles.btn}>
									<Icon name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'} />
								</button>
								<button onClick={actions.forward} className={styles.btn}>
									<Icon name="MdUpdate" />
								</button>
								<div className={styles.time}>
									<span className={styles.start}>
										{Math.floor(video.currentTime / 60) +
											':' +
											('0' + Math.floor(video.currentTime % 60)).slice(-2)}
									</span>
									<span className={styles.line}>/</span>
									<span className={styles.start}>
										{Math.floor(video.videoTime / 60) +
											':' +
											('0' + Math.floor(video.videoTime % 60)).slice(-2)}
									</span>
								</div>
							</div>
							<div className={styles.right}>
								<button onClick={actions.fullScreen} className={styles.btn}>
									<Icon name="MdFullscreen" />
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default VideoPlayer

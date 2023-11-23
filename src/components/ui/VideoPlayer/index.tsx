import cn from 'classnames'
import { FC } from 'react'

import Icon from '@/ui/Icon'
import AuthPlaceholder from '@/ui/VideoPlayer/AuthPlaceholder'

import { useAuth } from '@/hooks/auth/useAuth'
import { useVideo } from '@/hooks/video/useVideo'

import { IClass } from '@/shared/interface/classname.interface'
import { TVideoPlayer } from '@/shared/types/video.types'

import styles from './VideoPlayer.module.scss'

const VideoPlayer: FC<TVideoPlayer & IClass> = ({
	slug,
	videoSource,
	className,
}) => {
	const { actions, video, videoRef } = useVideo()
	const { user } = useAuth()
	return (
		<div className={cn(styles.wrap, className)}>
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

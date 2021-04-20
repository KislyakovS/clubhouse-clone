import clsx from "clsx"
import styles from "./StepInfo.module.scss"

export const StepInfo = ({ title, description, icon }) => {
    return (
        <div className={clsx(styles.block, "text-center")}>
            <div>
                <img className={clsx("mb-20", styles.img)} src={icon} alt="Step picture" />
            </div>
            <b className={styles.title}>{title}</b>
            {description && <p className={clsx("mt-10", styles.description)}>{description}</p>}
        </div>
    )
}
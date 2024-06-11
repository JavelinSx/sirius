import Image from 'next/image';
import styles from './styles.module.scss';
import bannerHome from '@/public/images/banner-home.png';
import buttonDashed from '@/public/icon/btn-dashed.svg';
import checkMarkIcon from '@/public/icon/checkmark-icon.svg';
import shcoolIcon from '@/public/icon/school-icon.svg';
import emptyAvatarIcon from '@/public/icon/empty-avatar.svg';
import { Divider } from '../../components/ui/Divider/Divider';
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <div className={styles.bannerTitle}>До 31 декабря любой курс со скидкой 20%</div>
        <p className={styles.bannerText}>
          До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!
        </p>
        <Image src={bannerHome} alt='banner-home' height={248} className={styles.bannerImg}></Image>
      </div>

      <div className={styles.timer}>
        <div className={styles.timerTitle}>Следующее занятие начнется через:</div>
        <div className={styles.timerTime}>
          <div className={styles.timerBlock}>
            <p className={styles.timerTimeBig}>6</p>
            <p className={styles.timerTimeSmall}>ч</p>
          </div>
          <div className={styles.timerBlock}>
            <p className={styles.timerTimeBig}>12</p>
            <p className={styles.timerTimeSmall}>м</p>
          </div>
          <div className={styles.timerBlock}>
            <p className={styles.timerTimeBig}>24</p>
            <p className={styles.timerTimeSmall}>с</p>
          </div>
        </div>
        <button className={styles.timerButton}>
          <Image src={buttonDashed} alt='dash-brn' className={styles.timerButtonDash}></Image>
        </button>
      </div>
      <div className={styles.blockContainer}>
        <button className={styles.homeWork}>
          <p className={styles.blockText}>Домашние задания</p>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={shcoolIcon} alt='school-icon'></Image>
          </div>
        </button>
        <button className={styles.report}>
          <p className={styles.blockText}>
            Отчеты &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; от учителей
          </p>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={checkMarkIcon} alt='chekmark-icon'></Image>
          </div>
        </button>
      </div>

      <div className={styles.balance}>
        <h2 className={styles.title}>Баланс занятий</h2>
        <ul className={`${styles.balanceList} scrollbar`}>
          <li className={styles.balanceItem}>
            <div className={styles.balanceItemText}>Ментальная Арифметика</div>
            <div className={styles.balanceItemValue}>32</div>
          </li>
          <Divider></Divider>
          <li className={styles.balanceItem}>
            <div className={styles.balanceItemText}>Программирование</div>
            <div className={styles.balanceItemValue}>0</div>
          </li>
          <Divider></Divider>
          <li className={styles.balanceItem}>
            <div className={styles.balanceItemText}>Скорочтение</div>
            <div className={styles.balanceItemValue}>4</div>
          </li>
          <Divider></Divider>
          <li className={styles.balanceItem}>
            <div className={styles.balanceItemText}>Скорочтение</div>
            <div className={styles.balanceItemValue}>4</div>
          </li>
          <Divider></Divider>
          <li className={styles.balanceItem}>
            <div className={styles.balanceItemText}>Скорочтение</div>
            <div className={styles.balanceItemValue}>4</div>
          </li>
          <Divider></Divider>
          <li className={styles.balanceItem}>
            <div className={styles.balanceItemText}>Скорочтение</div>
            <div className={styles.balanceItemValue}>4</div>
          </li>
          <Divider></Divider>
        </ul>

        <button className={styles.balanceBtn}>Button</button>
      </div>

      <div className={styles.schedule}>
        <h2 className={styles.scheduleTitle}>Ближайшие уроки</h2>
        <ul className={styles.scheduleList}>
          <li className={styles.scheduleItem}>
            <div className={styles.scheduleItemData}>
              <p className={styles.scheduleItemDataDigits}>1</p>
              <p className={styles.scheduleItemDataMounth}>мая</p>
            </div>
            <div className={styles.scheduleItemName}>Ментальная Арифметика</div>
            <div className={styles.scheduleItemInfo}>
              <div className={styles.scheduleItemTime}>14:00-14:25</div>
              <Image src={emptyAvatarIcon} alt='empty-avatar' className={styles.scheduleItemTeacherAvatar}></Image>
              <div className={styles.scheduleItemTeacher}>Бондарь Инна</div>
            </div>

            <div className={styles.scheduleItemButtonContainer}>
              <button className={styles.scheduleItemButton}>Button</button>
              <button className={styles.scheduleItemButton}>Button</button>
            </div>
          </li>
          <Divider></Divider>
          <li className={styles.scheduleItem}>
            <div className={styles.scheduleItemData}>
              <p className={styles.scheduleItemDataDigits}>30</p>
              <p className={styles.scheduleItemDataMounth}>октября</p>
            </div>
            <div className={styles.scheduleItemName}>Программирование</div>
            <div className={styles.scheduleItemInfo}>
              <div className={styles.scheduleItemTime}>11:00-11:11</div>
              <Image src={emptyAvatarIcon} alt='empty-avatar' className={styles.scheduleItemTeacherAvatar}></Image>
              <div className={styles.scheduleItemTeacher}>Животнова Оксана</div>
            </div>
            <div className={styles.scheduleItemButtonContainer}>
              <button className={styles.scheduleItemButton}>Button</button>
              <button className={styles.scheduleItemButton}>Button</button>
            </div>
          </li>
          <Divider></Divider>
          <li className={styles.scheduleItem}>
            <div className={styles.scheduleItemData}>
              <p className={styles.scheduleItemDataDigits}>16</p>
              <p className={styles.scheduleItemDataMounth}>ноября</p>
            </div>
            <p className={styles.scheduleItemName}>Скорочтение</p>
            <div className={styles.scheduleItemInfo}>
              <p className={styles.scheduleItemTime}>09:00-09:45</p>
              <Image src={emptyAvatarIcon} alt='empty-avatar' className={styles.scheduleItemTeacherAvatar}></Image>
              <p className={styles.scheduleItemTeacher}>Мини Елена</p>
            </div>
            <div className={styles.scheduleItemButtonContainer}>
              <button className={styles.scheduleItemButton}>Button</button>
              <button className={styles.scheduleItemButton}>Button</button>
            </div>
          </li>
          <Divider></Divider>
        </ul>
        <button className={styles.scheduleButton}>Button</button>
      </div>
    </div>
  );
}

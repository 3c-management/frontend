import React,{useState, useEffect} from 'react';
import styles from './Home.module.css';
import LeftMain from '../../components/Main/LeftMain';
import RightMain from '../../components/Main/RightMain';

interface ModalProps {
  onDataFromModal: (data: boolean) => void;
}

const Home: React.FC<ModalProps> = (props:ModalProps) => {
  const [modalData, setModalData] = useState<boolean>(true);

  const sendModalData = () => {
    props.onDataFromModal(modalData);
  }

  const handleDataFromChild = (data: boolean) => {
    setModalData(data);
    console.log(modalData)
    sendModalData()
  };

  return (
    <div className={styles.mainContent}>
      <LeftMain/>
      <RightMain onDataFromModal={handleDataFromChild}/>
    </div>
  );
}

export default Home;

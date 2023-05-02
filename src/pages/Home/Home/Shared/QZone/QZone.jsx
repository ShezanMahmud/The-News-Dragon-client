import qxone1 from '../../../../../assets/qZone1.png'
import qxone2 from '../../../../../assets/qZone2.png'
import qxone3 from '../../../../../assets/qZone3.png'

const QZone = () => {
   return (
      <div className="bg-secondary text-center my-4 py-4">
         <h4>Q-Zone</h4>
         <div>
            <img src={qxone1} alt="" />
            <img src={qxone2} alt="" />
            <img src={qxone3} alt="" />
         </div>
      </div>
   );
};

export default QZone;
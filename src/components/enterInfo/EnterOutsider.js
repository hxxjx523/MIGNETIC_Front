import bgImg from '../../images/testbg.png'
import '../../css/Who.css'
import Info from '../../components/common/Info'

import { useNavigate } from 'react-router-dom';

function EnterOutsider() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    const navigate= useNavigate()

    const handleSubmit= ()=> {
        navigate('/question')
    }

    return (
        <div className="enterStudent">
            <Info />
            <div className='enterStudentContainer'>
                <div className='enterStudentBox'>
                    <input className='inputText' type="text" placeholder="이름" id='studentName' />

                    <div className='radioContainer'>
                        <input type="radio" id="contactChoice1" name="contact" value="parent" />
                        <label className='radioLabel' for="contactChoice1">부모님</label>

                        <input type="radio" id="contactChoice2" name="contact" value="friend" />
                        <label className='radioLabel' for="contactChoice2">지인</label>

                        <input type="radio" id="contactChoice3" name="contact" value="company" />
                        <label className='radioLabel' for="contactChoice3">회사 관계자</label>
                    </div>

                    <div className='privacyContainer'>
                        개인정보정의
                        <input className='inputCheck' type="checkbox" />
                    </div>
                </div>

                <button className='testBtn' onClick={handleSubmit}>검사하기</button>
            </div>
        </div>
    )
}

export default EnterOutsider
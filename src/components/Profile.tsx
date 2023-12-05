import Wrapper from '../public/assets/styles/profile'

const ExperienceInfoList = [
        {
            itemKey: 0,
            date: '2020.09 ~ 2021.07',
            companyName: 'FinancailIQ',
            position: 'Web developer & Server maintenance and repair',
        },
        {
            itemKey: 1,
            date: '2022.03 ~ ',
            companyName: 'VIRNECT',
            position: 'Web developer & AR developer',
        },
    ]

const skillInfoList = [
    {
        itemKey: 0,
        skillName: 'Javascript',
    },
    {
        itemKey: 1,
        skillName: 'Typescript',
    },
    {
        itemKey: 2,
        skillName: 'React',
    },
    {
        itemKey: 3,
        skillName: 'NodeJS',
    },
    {
        itemKey: 4,
        skillName: 'NextJS',
    },
    {
        itemKey: 5,
        skillName: 'ExpreeJS',
    },
]

const Profile = () => {

    return (
        <Wrapper>
            <div className='introductionContent'>
                <div className='name'>Yungyoung Gwon</div>
                <div className='breifIntroduction'>Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary</div>
            </div>
            <div className='experienceContent'>
                {ExperienceInfoList.map((item) => {
                    return (
                        <>
                            <div className='tenure'>
                                {item.date}
                            </div>
                            <div className='info'>
                                    <div className='companyName'>{item.companyName}</div>
                                    <div>{item.position}</div>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className='skillContent'>
                <ul>
                    {skillInfoList.map((item) => {
                        return (
                            <li key={item.itemKey}>{item.skillName}</li>
                        )
                    })}
                </ul>
            </div>

        </Wrapper>
    )
}

export default Profile

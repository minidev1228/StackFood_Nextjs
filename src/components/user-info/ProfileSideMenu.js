import React from 'react'
import order from '../../../public/static/profile/order.svg'
import profile from '../../../public/static/profile/profileIcon.svg'
import cupons from '../../../public/static/profile/cupons.png'
import wallet from '../../../public/static/profile/wallet.svg'
import loyalty from '../../../public/static/profile/loyalty.svg'
import refer from '../../../public/static/refer_code.png'
import settings from '../../../public/static/profile/settings.svg'
import wish from '../../../public/static/profile/wish.svg'
import inboxIcon from '../../../public/static/profile/inbox-icon.png'
import {
    CustomPaperBigCard,
    CustomStackFullWidth,
} from '@/styled-components/CustomStyles.style'
import CustomerInfo from './CustomerInfo'
import MenuBar from './MenuBar'
import { RTL } from '../RTL/RTL'
export const tabData = [
    {
        id: 1,
        label: 'My Profile',
        value: 'profile',
        img: profile,
    },
    {
        id: 2,
        label: 'Orders',
        value: 'order',
        img: order,
    },
    {
        id: 3,
        label: 'Coupons',
        value: 'coupons',
        img: cupons,
    },
    {
        id: 4,
        label: 'Wish List',
        value: 'wishlist',
        img: wish,
    },
    {
        id: 5,
        label: 'Wallets',
        value: 'wallets',
        img: wallet,
    },
    {
        id: 6,
        label: 'Loyalty Points',
        value: 'loyalty',
        img: loyalty,
    },
    {
        id: 7,
        label: 'Referral Code',
        value: 'referral',
        img: refer,
    },
    {
        id: 8,
        label: 'Inbox',
        value: 'inbox',
        img: inboxIcon,
    },

    {
        id: 9,
        label: 'Settings',
        value: 'settings',
        img: settings,
    },
]

const ProfileSideMenu = ({ onClose, sidedrawer, page, setAttributeId }) => {
    let languageDirection = undefined
    if (typeof window !== 'undefined') {
        languageDirection = localStorage.getItem('direction')
    }

    return (
        <RTL direction={languageDirection}>
            <CustomStackFullWidth
                sx={{
                    position: 'sticky',
                    top: { xs: '90px', md: '130px' },
                    zIndex: 9,
                }}
            >
                <CustomPaperBigCard
                    padding="1rem"
                    sx={{
                        borderRadius: '5px',
                        paddingTop: '15px',
                        marginTop: '2px',
                        paddingBottom: '25px',
                    }}
                >
                    <CustomStackFullWidth gap="20px">
                        <CustomerInfo />
                        <MenuBar
                            setAttributeId={setAttributeId}
                            tabData={tabData}
                            onClose={onClose}
                            sidedrawer={sidedrawer}
                            page={page}
                        />
                    </CustomStackFullWidth>
                </CustomPaperBigCard>
            </CustomStackFullWidth>
        </RTL>
    )
}

export default ProfileSideMenu

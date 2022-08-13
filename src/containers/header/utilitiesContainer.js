import PopoverHelper from '../../components/headerContainer/popoverHelper'
import { Space } from 'antd'
import UserSelectionButton from '../../components/headerContainer/user/userSelectionButton';
import DatePickerButton from '../../components/headerContainer/datePickerButton';
import DrawerButton from '../../components/headerContainer/drawer/drawerButton';


function UtilitiesContainer() {
    return (
        <Space wrap={true} align="baseline" size={4}>

            {/* Date Picker Button */}
            <DatePickerButton /> 

            {/* Popover Helper */}
            <PopoverHelper />

            {/* Login Button */}
            <UserSelectionButton />

            {/* Drawer Button */}
            <DrawerButton />
            
        </Space>
    )
}


export default UtilitiesContainer;
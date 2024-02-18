import { notification, Button } from 'antd';

const Notification = ({ show, message }) => {
    const openNotification = (placement) => {
        notification.success({
            message: 'Alert',
            description: message,
            placement,
            style: {
                backgroundColor: '#f6ffed', // Green background color for success
                border: '1px solid #b7eb8f', // Border color for success
            },
        });
    };

    if (show) {
        openNotification();
    }

    return ;
};

export default Notification;

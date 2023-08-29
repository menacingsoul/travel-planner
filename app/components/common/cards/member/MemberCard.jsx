import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './member.style';
import { images } from '../../../../constants';

const MemberCard = ({ member, handleNavigate }) => {
    console.log(member)
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleNavigate}
        >
            <TouchableOpacity style={styles.memberCard}>
                <Image
                    source={images.profile} // Replace with member's profile image URL
                    resizeMode='contain'
                    style={styles.profileImage}
                />
            </TouchableOpacity>

            <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{member?.name}</Text>
                <Text style={styles.memberEmail}>{member?.email}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MemberCard
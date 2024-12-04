// import React, { useState } from 'react';
// import { 
//   View, 
//   Text, 
//   FlatList, 
//   StyleSheet, 
//   Image, 
//   TouchableOpacity, 
//   TextInput 
// } from 'react-native';

// const UserList = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const users = [
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       avatar: 'https://via.placeholder.com/150',
//       role: 'Software Engineer',
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       email: 'jane.smith@example.com',
//       avatar: 'https://via.placeholder.com/150',
//       role: 'Product Manager',
//     },
//     {
//       id: 3,
//       name: 'Mike Johnson',
//       email: 'mike.johnson@example.com',
//       avatar: 'https://via.placeholder.com/150',
//       role: 'UX Designer',
//     },
//     {
//       id: 4,
//       name: 'Sarah Williams',
//       email: 'sarah.williams@example.com',
//       avatar: 'https://via.placeholder.com/150',
//       role: 'Marketing Specialist',
//     },
//     {
//       id: 5,
//       name: 'David Brown',
//       email: 'david.brown@example.com',
//       avatar: 'https://via.placeholder.com/150',
//       role: 'Data Scientist',
//     }
//   ];

//   const filteredUsers = users.filter(user => 
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.role.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const renderUserItem = ({ item }) => (
//     <View style={styles.userCard}>
//       <Image 
//         source={{ uri: item.avatar }}
//         style={styles.avatar}
//       />
//       <View style={styles.userInfo}>
//         <Text style={styles.userName}>{item.name}</Text>
//         <Text style={styles.userEmail}>{item.email}</Text>
//         <Text style={styles.userRole}>{item.role}</Text>
//       </View>
//       <TouchableOpacity style={styles.actionButton}>
//         <Text style={styles.actionButtonText}>ℹ️</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerTitle}>User Directory</Text>
        
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchIcon}>🔍</Text>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search users..."
//             placeholderTextColor="#888"
//             value={searchTerm}
//             onChangeText={setSearchTerm}
//           />
//         </View>
//       </View>

//       <FlatList
//         data={filteredUsers}
//         renderItem={renderUserItem}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.listContainer}
//         ListEmptyComponent={
//           <View style={styles.emptyContainer}>
//             <Text style={styles.emptyText}>No users found</Text>
//           </View>
//         }
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//   },
//   headerContainer: {
//     backgroundColor: '#ffffff',
//     paddingTop: 50,
//     paddingBottom: 20,
//     paddingHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   searchIcon: {
//     marginRight: 10,
//     fontSize: 20,
//   },
//   searchInput: {
//     flex: 1,
//     height: 45,
//     fontSize: 16,
//     color: '#333',
//   },
//   listContainer: {
//     paddingHorizontal: 15,
//     paddingTop: 15,
//   },
//   userCard: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 15,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#666',
//     marginVertical: 5,
//   },
//   userRole: {
//     fontSize: 14,
//     color: '#28a745',
//   },
//   actionButton: {
//     padding: 10,
//   },
//   actionButtonText: {
//     fontSize: 20,
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#888',
//   },
// });

// export default UserList;
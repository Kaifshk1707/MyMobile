// import React from 'react';
// import { 
//   View, 
//   Text, 
//   FlatList, 
//   StyleSheet, 
//   Image 
// } from 'react-native';

// const UserList = () => {
//   // Generate 50 mock users
//   const users = Array.from({ length: 50 }, (_, index) => ({
//     id: index + 1,
//     name: `User ${index + 1}`,
//     email: `user${index + 1}@example.com`,
//     avatar: `https://via.placeholder.com/150?text=User+${index + 1}`,
//     designation: index % 2 === 0 ? 'Software Developer' : 'Marketing Executive'
//   }));

//   const renderUserItem = ({ item }) => (
//     <View style={styles.userCard}>
//       <Image 
//         source={{ uri: item.avatar }}
//         style={styles.avatar}
//       />
//       <View style={styles.userDetails}>
//         <Text style={styles.userName}>{item.name}</Text>
//         <Text style={styles.userEmail}>{item.email}</Text>
//         <Text style={styles.userDesignation}>{item.designation}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>User List</Text>
//       </View>
      
//       <FlatList
//         data={users}
//         renderItem={renderUserItem}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   listContainer: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//   },
//   userCard: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     marginBottom: 10,
//     padding: 15,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 15,
//   },
//   userDetails: {
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
//   userDesignation: {
//     fontSize: 14,
//     color: '#28a745',
//   },
// });

// export default UserList;
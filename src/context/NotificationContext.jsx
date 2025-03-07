// import React, { createContext, useState } from 'react';

// export const NotificationContext = createContext();

// export const NotificationProvider = ({ children }) => {
//   const [notifications, setNotifications] = useState([]);

//   const addNotification = (message, userId) => {
//     setNotifications((prev) => [
//       ...prev, 
//       { 
//         message, 
//         userId, 
//         id: Date.now(),
//         type: 'patient-registration'
//       }
//     ]);
//   };

//   const dismissNotification = (id) => {
//     setNotifications((prev) => 
//       prev.filter(notification => notification.id !== id)
//     );
//   };

//   return (
//     <NotificationContext.Provider value={{ notifications, addNotification, dismissNotification }}>
//       {children}
//       <div className="fixed top-4 right-4 z-50">
//         {notifications.map((notification) => (
//           <div key={notification.id} className="bg-white border border-gray-300 rounded-lg p-4 mb-2 shadow-md w-64">
//             <p className="text-sm text-gray-700">{notification.message}</p>
//             <div className="flex justify-end mt-2 space-x-2">
//               <button
//                 onClick={() => {
//                   // Navigate to the user's profile
//                   window.location.href = `/profile/${notification.userId}`;
//                 }}
//                 className="text-sm text-blue-500 hover:text-blue-700"
//               >
//                 Show Profile
//               </button>
//               <button
//                 onClick={() => dismissNotification(notification.id)}
//                 className="text-sm text-red-500 hover:text-red-700"
//               >
//                 Dismiss
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </NotificationContext.Provider>
//   );
// };

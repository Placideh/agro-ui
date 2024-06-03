// import { Check } from "@mui/icons-material";
// import { Box, CircularProgress, Fab } from "@mui/material";
// import { green } from "@mui/material/colors";
// import { useState } from "react";
// import CancelIcon from "@mui/icons-material/Cancel";
// interface IUserActionsProps {
//   params: string;
//   rowdId: string;
//   setRowId: (id: string) => void;
// }

// const UserActions: React.FC<IHomeProps> = ({
//   params,
//   rowId,
//   setRowId,
// }): IUserActionsProps => {
//   const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const handleSubmit = async () => {

//     }
//   return (
//     <Box
//       sx={{
//         m: 1,
//         position: "relative",
//       }}
//     >
//       {success ? (
//         <Fab
//           color="primary"
//           sx={{
//             width: 40,
//             height: 40,
//             backgroundColor: green[500],
//             "&:hover": {
//               backgroundColor: green[700],
//             },
//           }}
//         >
//           {" "}
//           <Check />
//         </Fab>
//       ) : (
//         <Fab
//           color="primary"
//           sx={{
//             width: 40,
//             height: 40,
//             backgroundColor: green[500],
//             "&:hover": {
//               backgroundColor: green[700],
//             },
//           }}
//                       disabled={params.id !== rowdId || loading}
//                       onClick={handleSubmit}
//         >
//           {" "}
//           <CancelIcon />
//         </Fab>
//       )}
//       {loading && (
//         <CircularProgress
//           size={68}
//           sx={{
//             color: green[500],
//             position: "absolute",
//             top: -6,
//             left: -6,
//             zIndex: 1,
//           }}
//         />
//       )}
//     </Box>
//   );
// };

// export default UserActions;

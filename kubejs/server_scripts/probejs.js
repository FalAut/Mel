// // requires: probejs

// if (Platform.isLoaded("probejs")) {
//     console.log(1);
//     ProbeJSEvents.generateDoc((event) => {
//         event.customSnippet(
//             "test",
//             ["#test"],
//             [
//                 "BlockEvents.rightClicked((event) => {",
//                 "    const { hand, item, block, player, level, server } = event",
//                 '    if (hand != "MAIN_HAND") return',
//                 "",
//                 "    $0",
//                 "})",
//             ],
//             "Block right-clicked event template"
//         );
//     });
// }
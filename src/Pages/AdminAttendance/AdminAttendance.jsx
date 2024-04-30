import Container from "../../Shared/Container";


const AdminAttendance = () => {
    const attendance = [
        {
            "name": "Jon Doe",
            "day1": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day2": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day3": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day4": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day5": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day6": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day11": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day12": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day13": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day14": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day16": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day17": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day18": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day19": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day20": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day21": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day22": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day23": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day24": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day25": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day26": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day27": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day28": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day29": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day30": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
        },
        {
            "name": "Bernardo Galaviz",
            "day1": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day2": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day3": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day4": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day5": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day6": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day11": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day12": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day13": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day14": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day16": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day17": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day18": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day19": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day20": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day21": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day22": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day23": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day24": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day25": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day26": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day27": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day28": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day29": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day30": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
        },
        {
            "name": "Jeffrey Warden",
            "day1": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day2": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day3": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day4": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day5": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day6": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day11": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day12": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day13": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day14": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day16": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day17": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day18": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day19": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day20": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day21": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day22": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day23": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day24": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day25": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day26": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day27": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day28": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day29": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day30": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
        },
        {
            "name": "Bernardo Galaviz",
            "day1": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day2": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day3": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day4": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day5": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day6": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day11": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day12": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day13": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day14": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day16": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day17": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day18": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day19": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day20": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day21": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day22": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day23": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day24": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day25": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day26": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day27": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day28": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day29": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day30": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
        },
        {
            "name": "Lesley Gatlin",
            "day1": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day2": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day3": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day4": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day5": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day6": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day11": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day12": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day13": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day14": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day16": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day17": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day18": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day19": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day20": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day21": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day22": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day23": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day24": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day25": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day26": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day27": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day28": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day29": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day30": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
        },
        {
            "name": "Bernardo Galaviz",
            "day1": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day2": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day3": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day4": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day5": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day6": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day11": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day12": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day13": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day14": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day16": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day17": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day18": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day19": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day20": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day21": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day22": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day23": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day24": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day25": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day26": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day27": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day28": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day29": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day30": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
        },
        {
            "name": "Jeffrey Warden",
            "day1": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day2": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day3": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day4": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day5": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day6": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day11": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day12": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day13": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day14": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day16": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day17": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day18": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day19": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day20": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day21": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day22": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day23": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day24": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day25": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day26": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day27": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day28": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day29": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day30": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
        },
        {
            "name": "Lesley Gatlin",
            "day1": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day2": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day3": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day4": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day5": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day6": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day11": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day12": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day13": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day14": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day16": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day17": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day18": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day19": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day20": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day21": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day22": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day23": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day24": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day25": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day26": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day27": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day28": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day29": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
            "day30": "https://i.ibb.co/zhCdPBN/check-button-removebg-preview.png",
        }

    ]
    return (
        <div>
            <div className="lg:flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Admin Attendance</h1>
                    <div className="text-lg breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Admin Attendance</a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <Container className="p-4">
                <div className="overflow-x-auto overflow-auto my-10 bg-white h-[68vh]">
                    <table className="table table-zebra ">
                        <thead className="bg-[#42453d]">
                            <tr>
                                <th className="text-base text-white text-center">Employee</th>
                                <th className="text-base text-white text-center">1</th>
                                <th className="text-base text-white text-center">2</th>
                                <th className="text-base text-white text-center">3</th>
                                <th className="text-base text-white text-center">4</th>
                                <th className="text-base text-white text-center">5</th>
                                <th className="text-base text-white text-center">6</th>
                                <th className="text-base text-white text-center">7</th>
                                <th className="text-base text-white text-center">8</th>
                                <th className="text-base text-white text-center">9</th>
                                <th className="text-base text-white text-center">10</th>
                                <th className="text-base text-white text-center">11</th>
                                <th className="text-base text-white text-center">12</th>
                                <th className="text-base text-white text-center">13</th>
                                <th className="text-base text-white text-center">14</th>
                                <th className="text-base text-white text-center">15</th>
                                <th className="text-base text-white text-center">16</th>
                                <th className="text-base text-white text-center">17</th>
                                <th className="text-base text-white text-center">18</th>
                                <th className="text-base text-white text-center">19</th>
                                <th className="text-base text-white text-center">20</th>
                                <th className="text-base text-white text-center">21</th>
                                <th className="text-base text-white text-center">22</th>
                                <th className="text-base text-white text-center">23</th>
                                <th className="text-base text-white text-center">24</th>
                                <th className="text-base text-white text-center">25</th>
                                <th className="text-base text-white text-center">26</th>
                                <th className="text-base text-white text-center">27</th>
                                <th className="text-base text-white text-center">28</th>
                                <th className="text-base text-white text-center">29</th>
                                <th className="text-base text-white text-center">30</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendance?.map((attendance) => <tr key={attendance.id}>
                                <td className="text-base text-center">
                                    {attendance.name}
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day1} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day2} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day3} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day4} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day5} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day6} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day7} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day8} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day9} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day10} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day11} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day12} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day13} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day14} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day15} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day16} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day17} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day18} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day19} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day20} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day21} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day22} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day23} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day24} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day25} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day26} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day27} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day28} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day29} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day30} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>

                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default AdminAttendance;
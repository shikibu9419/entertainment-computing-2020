import { Finger, FingerCurl, FingerDirection } from './finger_description.js';
import GestureDescription from './gesture_description.js';

// describe victory gesture ✌️
const HeartGesture = new GestureDescription('heart');

// thumb:
HeartGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
HeartGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
HeartGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
HeartGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

// index:
HeartGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
HeartGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
HeartGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
HeartGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
HeartGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
HeartGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
HeartGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
HeartGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
HeartGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
HeartGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
HeartGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);

// ring:
HeartGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
HeartGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
HeartGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
HeartGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
HeartGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
HeartGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
HeartGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);

// pinky:
HeartGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
HeartGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
HeartGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
HeartGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
HeartGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
HeartGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
HeartGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);

export default HeartGesture;

import { Finger, FingerCurl, FingerDirection } from './finger_description.js';
import GestureDescription from './gesture_description.js';

// describe victory gesture ✌️
const OkGesture = new GestureDescription('ok');

// thumb:
OkGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
OkGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
OkGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);
OkGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);
OkGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.9);
OkGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

// index:
OkGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
OkGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
OkGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);
OkGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1.0);
OkGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.9);
OkGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

// middle:
OkGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
OkGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
OkGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
OkGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
OkGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

// ring:
OkGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
OkGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
OkGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
OkGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
OkGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
OkGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
OkGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
OkGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
OkGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
OkGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default OkGesture;

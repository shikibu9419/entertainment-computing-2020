import { Finger, FingerCurl, FingerDirection } from './finger_description.js';
import GestureDescription from './gesture_description.js';

// describe victory gesture ✌️
const GunGesture = new GestureDescription('gun');

// thumb:
GunGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
GunGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
GunGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
GunGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

// index:
GunGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
GunGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
GunGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
GunGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
GunGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
GunGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
GunGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
GunGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
GunGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// ring:
GunGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
GunGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
GunGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
GunGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
GunGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
GunGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
GunGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
GunGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
GunGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
GunGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default GunGesture;

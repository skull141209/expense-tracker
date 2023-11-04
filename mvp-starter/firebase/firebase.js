/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHFuU567-xRVWeAmH9-lFyqfzZB-XGOik",
  authDomain: "finance-tracker-e27c1.firebaseapp.com",
  projectId: "finance-tracker-e27c1",
  storageBucket: "finance-tracker-e27c1.appspot.com",
  messagingSenderId: "174708227461",
  appId: "1:174708227461:web:0b8b173f5b6f656834d8ec",
  measurementId: "G-4CTZNNEN1V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

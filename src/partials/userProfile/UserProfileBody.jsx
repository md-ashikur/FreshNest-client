import  { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserProfileBody = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'default-profile.jpg',
  });
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleProfilePictureChange = (e) => {
    if (e.target.files[0]) {
      setNewProfilePicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
    setIsEditing(false);
  };


const [passwords, setPasswords] = useState({
currentPassword: '',
newPassword: '',
confirmPassword: '',
});
const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevPasswords) => ({ ...prevPasswords, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center lg:mx-20 mx-5 my-20">
      <div className="lg:max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="mb-4 lg:mb-0 lg:w-1/3 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src={newProfilePicture || user.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {isEditing && (
              <label className="mt-4 block text-gray-700">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary-50 file:text-primary-700
                    hover:file:bg-primary-100"
                  onChange={handleProfilePictureChange}
                />
              </label>
            )}
          </div>
          <div className="lg:w-2/3 w-full">
            {isEditing ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user.name}
                    {...register('name', { required: true })}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.name && <span className="text-red-500">Name is required</span>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    {...register('email', { required: true })}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="mt-6 flex justify-end">
                  <button type="submit" className="px-6 py-3 bg-primary text-white rounded-full">
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <div className="mb-4">
                  <p className="text-gray-700"><strong>Name:</strong> {user.name}</p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-3 bg-primary text-white rounded-full"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
          </div>

        
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button type="submit" className="px-6 py-3 bg-primary text-white rounded-full">
            Update Password
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default UserProfileBody;

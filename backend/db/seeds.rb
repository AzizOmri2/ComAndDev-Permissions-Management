# Adding an admin if it doesn't exist

admin_email = "admin@example.com"
admin_password = "123456789"
admin_username = "Super Admin"
admin_avatar = "admin.png"

# Check if the admin already exists
admin = User.find_or_initialize_by(email: admin_email)

admin.assign_attributes(
  password: admin_password,
  password_confirmation: admin_password,
  username: admin_username,
  avatar: admin_avatar
)

if admin.save
  puts admin.persisted? ? "✅ Admin user created or updated with email: #{admin_email}" : "⚠️ Admin user already exists and unchanged."
else
  puts "❌ Failed to create/update admin: #{admin.errors.full_messages.join(', ')}"
end

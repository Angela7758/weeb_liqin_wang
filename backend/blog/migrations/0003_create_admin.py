from django.db import migrations

def create_admin_user(apps, schema_editor):
    User = apps.get_model('blog', 'User')
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser(
            username='admin',
            email='admin@example.com',
            password='Admin123456!'
        )

class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_article_author'),
    ]

    operations = [
        migrations.RunPython(create_admin_user),
    ]

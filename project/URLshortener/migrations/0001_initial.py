# Generated by Django 2.1.2 on 2018-10-18 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('long_name', models.CharField(max_length=100)),
                ('short_name', models.CharField(max_length=100)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]

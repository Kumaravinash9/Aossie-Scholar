# Generated by Django 2.2.3 on 2019-07-19 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('metrics', '0009_auto_20190718_1028'),
    ]

    operations = [
        migrations.AddField(
            model_name='scholarprofile',
            name='Company',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='scholarprofile',
            name='Website',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
# Generated by Django 2.2.3 on 2019-07-18 04:58

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('metrics', '0008_scholarprofile_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scholarprofile',
            name='Year',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), null=True, size=None),
        ),
    ]

from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Author, Biography, Article, Book


class AuthorSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class BiographySerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Biography
        fields = '__all__'

class ArticleSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

class BookSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'